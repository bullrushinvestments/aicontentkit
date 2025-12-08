import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Requirement {
  id?: string;
  title: string;
  description: string;
  status: boolean; // true for active, false for inactive
}

interface FormValues {
  title: string;
  description: string;
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', { ...data, status: true });
      toast.success('Requirement added successfully!');
      reset();
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className={`mt-1 block w-full ${errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            rows={4}
            className={`mt-1 block w-full ${errors.description ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Existing Requirements</h2>
      <ul role="list" aria-labelledby="requirements-list-title" className="mt-4 divide-y divide-gray-200">
        {requirements.map(requirement => (
          <li key={requirement.id} className="flex justify-between items-center py-4 px-6 hover:bg-gray-50">
            <div>
              <p className="text-sm font-medium text-gray-900">{requirement.title}</p>
              <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>
            </div>
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${requirement.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {requirement.status ? 'Active' : 'Inactive'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface Requirement {
  id?: string;
  title: string;
  description: string;
  status: boolean; // true for active, false for inactive
}

interface FormValues {
  title: string;
  description: string;
}

const GatherRequirements: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Requirement[]>('https://api.example.com/requirements');
      setRequirements(response.data);
    } catch (err) {
      setError('Failed to load requirements.');
    } finally {
      setLoading(false);
    }
  };

  const onSubmit: SubmitHandler<FormValues> = async data => {
    try {
      setLoading(true);
      await axios.post<Requirement>('https://api.example.com/requirements', { ...data, status: true });
      toast.success('Requirement added successfully!');
      reset();
      fetchRequirements();
    } catch (err) {
      setError('Failed to add requirement.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Gather Requirements</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className={`mt-1 block w-full ${errors.title ? 'border-red-500' : ''}`}
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            {...register('description', { required: 'Description is required' })}
            rows={4}
            className={`mt-1 block w-full ${errors.description ? 'border-red-500' : ''}`}
          />
        </div>
        <button type="submit" disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">
          {loading ? 'Loading...' : 'Add Requirement'}
        </button>
      </form>

      <h2 className="text-xl font-bold mt-8">Existing Requirements</h2>
      <ul role="list" aria-labelledby="requirements-list-title" className="mt-4 divide-y divide-gray-200">
        {requirements.map(requirement => (
          <li key={requirement.id} className="flex justify-between items-center py-4 px-6 hover:bg-gray-50">
            <div>
              <p className="text-sm font-medium text-gray-900">{requirement.title}</p>
              <p className="mt-1 text-sm text-gray-500">{requirement.description}</p>
            </div>
            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${requirement.status ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {requirement.status ? 'Active' : 'Inactive'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;