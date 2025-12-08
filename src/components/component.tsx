import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpecification {
  name: string;
  description: string;
  industry: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<BusinessSpecification>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Select an option',
      features: []
    }
  });

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000);
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('Failed to create business specification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Name is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="name"
            label="Business Name"
            autoFocus
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: 'Description is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            id="description"
            label="Business Description"
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        )}
      />

      <InputLabel id="industry-label">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{
          required: 'Industry is required',
        }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="industry-label"
            id="industry"
            fullWidth
            error={!!errors.industry}
            helperText={errors.industry?.message}
          >
            <MenuItem value="Select an option">Select an option</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            {/* Add more options as needed */}
          </Select>
        )}
      />

      <Controller
        name="features"
        control={control}
        rules={{
          required: 'Features are required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="features"
            label="Business Features (comma-separated)"
            error={!!errors.features}
            helperText={errors.features?.message}
          />
        )}
      />

      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Button
          type="submit"
          fullWidth
          disabled={loading}
          variant="contained"
          aria-label="Create Business Specification"
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? 'Creating...' : 'Create'}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, CircularProgress, Typography, Box, InputLabel, Select, MenuItem } from '@mui/material';

interface BusinessSpecification {
  name: string;
  description: string;
  industry: string;
  features: Array<string>;
}

const CreateBusinessSpecification: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const { control, handleSubmit, reset, formState: { errors } } = useForm<BusinessSpecification>({
    defaultValues: {
      name: '',
      description: '',
      industry: 'Select an option',
      features: []
    }
  });

  useEffect(() => {
    if (error) {
      setTimeout(() => setError(null), 5000);
    }
  }, [error]);

  const onSubmit = async (data: BusinessSpecification) => {
    setLoading(true);
    try {
      await axios.post('/api/business-specification', data);
      reset();
    } catch (err) {
      setError('Failed to create business specification');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: 'Name is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="name"
            label="Business Name"
            autoFocus
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        rules={{
          required: 'Description is required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            id="description"
            label="Business Description"
            error={!!errors.description}
            helperText={errors.description?.message}
          />
        )}
      />

      <InputLabel id="industry-label">Industry</InputLabel>
      <Controller
        name="industry"
        control={control}
        rules={{
          required: 'Industry is required',
        }}
        render={({ field }) => (
          <Select
            {...field}
            labelId="industry-label"
            id="industry"
            fullWidth
            error={!!errors.industry}
            helperText={errors.industry?.message}
          >
            <MenuItem value="Select an option">Select an option</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Finance">Finance</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            {/* Add more options as needed */}
          </Select>
        )}
      />

      <Controller
        name="features"
        control={control}
        rules={{
          required: 'Features are required',
        }}
        render={({ field }) => (
          <TextField
            {...field}
            margin="normal"
            fullWidth
            id="features"
            label="Business Features (comma-separated)"
            error={!!errors.features}
            helperText={errors.features?.message}
          />
        )}
      />

      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
        <Button
          type="submit"
          fullWidth
          disabled={loading}
          variant="contained"
          aria-label="Create Business Specification"
          startIcon={loading ? <CircularProgress size={20} /> : null}
        >
          {loading ? 'Creating...' : 'Create'}
        </Button>
      </Box>
    </Box>
  );
};

export default CreateBusinessSpecification;