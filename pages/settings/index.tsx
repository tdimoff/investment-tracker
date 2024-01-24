import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/src/store';
import { NextPage } from 'next';
import { IUser } from '@/src/interfaces/IUser.interface';
import UserForm from '@/src/components/UserForm';

const SettingsPage: NextPage = () => {

  const userDetails = useSelector<RootState, IUser>(state => state.user.details);

  return (
    <Container maxWidth="sm" className="pt-5">
      <Paper elevation={3} className="p-4">
        <Typography variant="h5" className="mb-4">User Settings</Typography>
        <UserForm user={userDetails} />
      </Paper>
    </Container>
  );
};

export default SettingsPage;
