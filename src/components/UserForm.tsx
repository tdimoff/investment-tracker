import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IUser } from "@/src/interfaces/IUser.interface";
import { validationSchema } from "@/src/schemas/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/src/store';
import { updateUserDetailsThunk } from '@/src/store/userSlice';

interface UserFormProps {
  user: IUser;
}

const UserForm: React.FC<UserFormProps> = ({ user }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit } = useForm<IUser>({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      age: 0,
    },
  });

  const onSubmit = (data: IUser) => {
    dispatch(updateUserDetailsThunk(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <TextField
          {...register("firstName")}
          label="First Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          {...register("lastName")}
          label="Last Name"
          variant="outlined"
          fullWidth
        />
        <TextField
          {...register("age")}
          label="Age"
          type="number"
          variant="outlined"
          fullWidth
        />
        <TextField
          {...register("email")}
          label="Email"
          variant="outlined"
          fullWidth
        />
        <TextField
          {...register("password")}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          fullWidth
          className="mt-4"
        >
          Save Changes
        </Button>
      </form>
    </>
  );
};

export default UserForm;
