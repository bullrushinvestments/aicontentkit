import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface Test {
  id: number;
  name: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      // Fetch existing test data for editing
      axios.get(`/api/tests/${router.query.id}`)
        .then(response => {
          setTestName(response.data.name);
          setTestDescription(response.data.description);
        })
        .catch(err => setError('Failed to load test details'));
    }
  }, [router.isReady]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!testName.trim() || !testDescription.trim()) {
      setError('Test name and description are required');
      setLoading(false);
      return;
    }

    axios.post('/api/tests', { name: testName, description: testDescription })
      .then(() => {
        toast.success('Test created successfully!');
        router.push('/tests'); // Redirect to tests list page
      })
      .catch(err => {
        setError('Failed to create test');
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Write Test</h1>
      {error && <p role="alert" aria-live="assertive" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="testName" className="block mb-1">Test Name</label>
          <input
            type="text"
            id="testName"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            placeholder="Enter test name..."
            required
            aria-required="true"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="testDescription" className="block mb-1">Test Description</label>
          <textarea
            id="testDescription"
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
            placeholder="Enter test description..."
            required
            aria-required="true"
            rows={4}
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button type="submit" disabled={loading} className={`w-full py-2 px-4 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold rounded-lg shadow-md focus:outline-none`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface Test {
  id: number;
  name: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [testName, setTestName] = useState('');
  const [testDescription, setTestDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (router.isReady) {
      // Fetch existing test data for editing
      axios.get(`/api/tests/${router.query.id}`)
        .then(response => {
          setTestName(response.data.name);
          setTestDescription(response.data.description);
        })
        .catch(err => setError('Failed to load test details'));
    }
  }, [router.isReady]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (!testName.trim() || !testDescription.trim()) {
      setError('Test name and description are required');
      setLoading(false);
      return;
    }

    axios.post('/api/tests', { name: testName, description: testDescription })
      .then(() => {
        toast.success('Test created successfully!');
        router.push('/tests'); // Redirect to tests list page
      })
      .catch(err => {
        setError('Failed to create test');
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-4">Write Test</h1>
      {error && <p role="alert" aria-live="assertive" className="mb-2 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="testName" className="block mb-1">Test Name</label>
          <input
            type="text"
            id="testName"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            placeholder="Enter test name..."
            required
            aria-required="true"
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="testDescription" className="block mb-1">Test Description</label>
          <textarea
            id="testDescription"
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
            placeholder="Enter test description..."
            required
            aria-required="true"
            rows={4}
            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button type="submit" disabled={loading} className={`w-full py-2 px-4 ${loading ? 'bg-gray-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-bold rounded-lg shadow-md focus:outline-none`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;