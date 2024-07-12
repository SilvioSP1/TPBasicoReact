import React, { useState, useRef } from 'react';

const FormCharacter: React.FC = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [pdfBase64, setPdfBase64] = useState('');
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPdfBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('species', species);
    formData.append('status', status);
    formData.append('pdf', pdfBase64);

    console.log('Form Data:', {
      name,
      species,
      status,
      pdf: pdfBase64
    });

    // Reset form inputs
    if (formRef.current) {
      formRef.current.reset();
    }

    setName('');
    setSpecies('');
    setStatus('');
    setPdfBase64('');
    clearFileInput();
  };

  return (
    <div className='flex items-center justify-center p-4'>
      <div className='max-w-lg overflow-hidden shadow-xl p-4 bg-secondary rounded-xl border-2 border-primary'>
        <h1 className="text-3xl text-white font-bold mb-4">Add New Character</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-white">Species:</label>
            <input
              type="text"
              value={species}
              onChange={(e) => setSpecies(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-white">Status:</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block text-white">Upload PDF:</label>
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              ref={fileInputRef}
              className="w-full p-2 border border-gray-300 rounded bg-white"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCharacter;
