import React, { useState, useRef } from 'react';

const FormCharacter: React.FC = () => {
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [pdfBase64, setPdfBase64] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value)
        value.length == 0 ? setErrors((prevErrors) => ({ ...prevErrors, name: 'Name is required' })) :
        setErrors((prevErrors) => ({ ...prevErrors, name: '' }))
        break;
      case 'species':
        setSpecies(value);
        value.length == 0 ? setErrors((prevErrors) => ({ ...prevErrors, species: 'Species is required' })) :
        setErrors((prevErrors) => ({ ...prevErrors, species: '' }))
        break;
      case 'status':
        setStatus(value);
        value.length == 0 ? setErrors((prevErrors) => ({ ...prevErrors, status: 'Status is required' })) :
        setErrors((prevErrors) => ({ ...prevErrors, status: '' }))
        break;
      default:
        break;
    }
  };

  const clearFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }
    if (!species) {
      newErrors.species = 'Species is required';
    }
    if (!status) {
      newErrors.status = 'Status is required';
    }
    if (!pdfBase64) {
      newErrors.pdf = 'PDF is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };


  return (
    <div className='flex items-center justify-center p-4'>
      <div className='max-w-lg overflow-hidden shadow-xl p-4 bg-secondary rounded-xl border-2 border-primary'>
        <h1 className="text-3xl text-white font-bold mb-4">Add New Character</h1>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white">Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-white">Species:</label>
            <input
              type="text"
              name="species"
              value={species}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.species && <p className="text-red-500">{errors.species}</p>}
          </div>
          <div>
            <label className="block text-white">Status:</label>
            <input
              type="text"
              name="status"
              value={status}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
            {errors.status && <p className="text-red-500">{errors.status}</p>}
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
            {errors.pdf && <p className="text-red-500">{errors.pdf}</p>}
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
