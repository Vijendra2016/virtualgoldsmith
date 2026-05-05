'use client';

import { useState, useRef, useCallback } from 'react';

interface MatchingItem {
  id: string;
  image: string;
  title: string;
}

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  thumbnails: string[];
  inquireLink: string;
  startProjectLink: string;
  matchingItems?: MatchingItem[];
}

const EMPTY_PRODUCT: Product = {
  id: '',
  title: '',
  shortDescription: '',
  fullDescription: '',
  mainImage: '',
  thumbnails: [],
  inquireLink: '/contact',
  startProjectLink: 'https://virtualgoldsmith.bloom.io/get-started-11',
  matchingItems: [],
};

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authed, setAuthed] = useState(false);
  const [authError, setAuthError] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toast, setToast] = useState('');

  const mainFileRef = useRef<HTMLInputElement>(null);
  const thumbFileRef = useRef<HTMLInputElement>(null);

  const headers = useCallback(
    () => ({ 'x-admin-password': password }),
    [password]
  );

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }

  async function login() {
    setAuthError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      const productsRes = await fetch('/api/admin/products', {
        headers: headers(),
      });
      if (productsRes.ok) {
        setProducts(await productsRes.json());
        setAuthed(true);
      }
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  }

  async function saveProducts(updated: Product[]) {
    setSaving(true);
    const res = await fetch('/api/admin/products', {
      method: 'PUT',
      headers: { ...headers(), 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    if (res.ok) {
      setProducts(updated);
      setEditing(null);
      showToast('Saved successfully!');
    } else {
      showToast('Save failed. Please try again.');
    }
    setSaving(false);
  }

  async function handleSave() {
    if (!editing) return;
    if (!editing.id.trim() || !editing.title.trim()) {
      showToast('Product ID and Title are required.');
      return;
    }
    const updated = isNew
      ? [...products, editing]
      : products.map((p) => (p.id === editing.id ? editing : p));
    await saveProducts(updated);
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this product? This cannot be undone.')) return;
    await saveProducts(products.filter((p) => p.id !== id));
    showToast('Product deleted.');
  }

  async function uploadFile(file: File): Promise<string | null> {
    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/admin/upload', {
      method: 'POST',
      headers: headers(),
      body: formData,
    });
    setUploading(false);
    if (res.ok) {
      const { url } = await res.json();
      return url;
    }
    showToast('Upload failed.');
    return null;
  }

  async function handleMainImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !editing) return;
    const url = await uploadFile(file);
    if (url) setEditing({ ...editing, mainImage: url });
  }

  async function handleThumbUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file || !editing) return;
    const url = await uploadFile(file);
    if (url) setEditing({ ...editing, thumbnails: [...editing.thumbnails, url] });
  }

  function removeThumb(index: number) {
    if (!editing) return;
    setEditing({
      ...editing,
      thumbnails: editing.thumbnails.filter((_, i) => i !== index),
    });
  }

  function openNew() {
    setEditing({ ...EMPTY_PRODUCT });
    setIsNew(true);
  }

  function openEdit(product: Product) {
    setEditing({ ...product, thumbnails: [...product.thumbnails], matchingItems: [...(product.matchingItems ?? [])] });
    setIsNew(false);
  }

  // ── Login screen ──────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Virtual Goldsmith</h1>
            <p className="text-gray-500 text-sm mt-1">Admin Panel</p>
          </div>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && login()}
            className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm mb-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
          />
          {authError && (
            <p className="text-red-500 text-sm mb-3">{authError}</p>
          )}
          <button
            onClick={login}
            className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-xl py-2.5 text-sm font-semibold transition"
          >
            Login
          </button>
        </div>
      </div>
    );
  }

  // ── Dashboard ──────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <h1 className="text-lg font-bold text-gray-900">Virtual Inventory Admin</h1>
        <div className="flex items-center gap-3">
          {toast && (
            <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
              {toast}
            </span>
          )}
          <button
            onClick={openNew}
            className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            + Add Product
          </button>
          <button
            onClick={() => { setAuthed(false); setPassword(''); setProducts([]); }}
            className="text-gray-400 hover:text-gray-600 text-sm transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Product grid */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.length === 0 && (
          <p className="col-span-3 text-center text-gray-400 py-20">
            No products yet. Click &quot;+ Add Product&quot; to get started.
          </p>
        )}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="h-52 bg-gray-100 overflow-hidden">
              {product.mainImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={product.mainImage}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-300 text-4xl">
                  &#128247;
                </div>
              )}
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-400 font-mono mb-1">{product.id}</p>
              <h3 className="font-semibold text-gray-800 mb-1 leading-snug">{product.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 mb-4">{product.shortDescription}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => openEdit(product)}
                  className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-xl text-sm font-medium transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-2 rounded-xl text-sm font-medium transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit modal */}
      {editing && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-2xl my-8 shadow-2xl">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">
                {isNew ? 'Add New Product' : `Editing: ${editing.title || 'Untitled'}`}
              </h2>
              <button
                onClick={() => setEditing(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl leading-none transition"
              >
                &times;
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6 space-y-5">
              {/* ID (only for new) */}
              {isNew && (
                <Field label="Product ID (used in URL)">
                  <input
                    value={editing.id}
                    onChange={(e) =>
                      setEditing({
                        ...editing,
                        id: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'),
                      })
                    }
                    placeholder="e.g. diamond-solitaire-ring"
                    className={inputCls}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    URL will be: /portfolio/virtual-inventory/{editing.id || 'your-id'}
                  </p>
                </Field>
              )}

              <Field label="Title">
                <input
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  className={inputCls}
                />
              </Field>

              <Field label="Short Description">
                <textarea
                  value={editing.shortDescription}
                  onChange={(e) => setEditing({ ...editing, shortDescription: e.target.value })}
                  rows={2}
                  className={textareaCls}
                />
              </Field>

              <Field label="Full Description">
                <textarea
                  value={editing.fullDescription}
                  onChange={(e) => setEditing({ ...editing, fullDescription: e.target.value })}
                  rows={5}
                  className={textareaCls}
                />
              </Field>

              <Field label="Inquire Link">
                <input
                  value={editing.inquireLink}
                  onChange={(e) => setEditing({ ...editing, inquireLink: e.target.value })}
                  className={inputCls}
                />
              </Field>

              <Field label="Start Project Link">
                <input
                  value={editing.startProjectLink}
                  onChange={(e) => setEditing({ ...editing, startProjectLink: e.target.value })}
                  className={inputCls}
                />
              </Field>

              {/* Main image */}
              <Field label="Main Image">
                {editing.mainImage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={editing.mainImage}
                    alt=""
                    className="w-full h-52 object-cover rounded-xl mb-2"
                  />
                )}
                <div className="flex gap-2">
                  <input
                    value={editing.mainImage}
                    onChange={(e) => setEditing({ ...editing, mainImage: e.target.value })}
                    placeholder="Paste image URL or upload"
                    className={`${inputCls} flex-1`}
                  />
                  <button
                    onClick={() => mainFileRef.current?.click()}
                    disabled={uploading}
                    className="shrink-0 bg-amber-50 hover:bg-amber-100 text-amber-700 px-4 py-2 rounded-xl text-sm font-medium transition disabled:opacity-50"
                  >
                    {uploading ? 'Uploading…' : 'Upload'}
                  </button>
                </div>
                <input
                  ref={mainFileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleMainImageUpload}
                />
              </Field>

              {/* Thumbnails */}
              <Field label={`Thumbnails (${editing.thumbnails.length})`}>
                <div className="grid grid-cols-4 gap-2">
                  {editing.thumbnails.map((thumb, i) => (
                    <div key={i} className="relative group aspect-square">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={thumb}
                        alt=""
                        className="w-full h-full object-cover rounded-xl"
                      />
                      <button
                        onClick={() => removeThumb(i)}
                        className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition leading-none"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => thumbFileRef.current?.click()}
                    disabled={uploading}
                    className="aspect-square border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400 hover:border-amber-400 hover:text-amber-500 transition text-2xl disabled:opacity-50"
                  >
                    +
                  </button>
                </div>
                <input
                  ref={thumbFileRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleThumbUpload}
                />
              </Field>
            </div>

            {/* Modal footer */}
            <div className="flex gap-3 px-6 py-4 border-t border-gray-200">
              <button
                onClick={() => setEditing(null)}
                className="flex-1 border border-gray-300 text-gray-700 py-2.5 rounded-xl font-medium hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving || uploading}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2.5 rounded-xl font-semibold transition disabled:opacity-50"
              >
                {saving ? 'Saving…' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputCls =
  'w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent';

const textareaCls =
  'w-full border border-gray-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none';
