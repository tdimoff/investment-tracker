import React, { useEffect } from "react";
import { UseFormRegister } from "react-hook-form";
import { IUser } from "@/src/interfaces/IUser.interface";
import { validationSchema } from "@/src/schemas/user.schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/src/store";
import { updateUserDetailsThunk } from "@/src/store/userSlice";

interface UserFormProps {
  user: IUser;
}

const UserForm: React.FC<UserFormProps> = () => {
  const user = useSelector((state: RootState) => state.user.details);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      age: user.age,
    },
  });

  useEffect(() => {
    reset(user);
  }, [user]);

  const onSubmit = (data: IUser) => {
    dispatch(updateUserDetailsThunk(data));
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("firstName")}
          label="First Name"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="my-4"
          error={!!errors.firstName}
          helperText={errors.firstName ? errors.firstName.message : ''}
        />
        <TextField
          {...register("lastName")}
          label="Last Name"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="my-4"
          error={!!errors.lastName}
          helperText={errors.lastName ? errors.lastName.message : ''}
        />
        <TextField
          {...register("age")}
          label="Age"
          type="number"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="my-4"
          error={!!errors.age}
          helperText={errors.age ? errors.age.message : ''}
        />
        <TextField
          {...register("email")}
          label="Email"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="my-4"
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
        />
        <TextField
          {...register("password")}
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          className="my-4"
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : ''}
        />
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          fullWidth
          className="my-4 bg-blue-800 hover:bg-blue-500 text-white"
        >
          Save Changes
        </Button>
      </form>
    </>
  );
};

export default UserForm;
