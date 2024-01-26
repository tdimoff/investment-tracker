import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/src/schemas/investment.schema";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { IInvestmentItem } from "../interfaces/IInvestment.interface";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { createInvestmentThunk } from "../store/investmentSlice";

interface IInvestmentDialogFormProps {
  open: boolean;
  onClose: () => void;
}

const InvestmentDialogForm = ({
  open,
  onClose,
}: IInvestmentDialogFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInvestmentItem>({
    mode: "all",
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: "",
      type: "",
      value: 0,
      date: "",
      status: "",
    },
  });
  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (data: IInvestmentItem) => {
    dispatch(createInvestmentThunk(data)).then(onClose);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Investment</DialogTitle>
      <DialogContent className="flex flex-col items-center justify-center h-full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col items-center justify-center w-full h-full">
            <TextField
              {...register("name")}
              label="Name"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="my-4 w-[25rem]"
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
            />
            <FormControl className="my-4 w-[25rem]" error={!!errors.type}>
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                {...register("type")}
                labelId="type-label"
                label="Type"
                inputProps={{
                  id: "type",
                }}
              >
                <MenuItem value="fixed-income">Fixed Income</MenuItem>
                <MenuItem value="stock">Stock</MenuItem>
                <MenuItem value="commodity">Commodity</MenuItem>
                <MenuItem value="crypto">Crypto</MenuItem>
              </Select>
              {errors.type && (
                <FormHelperText>{errors.type.message}</FormHelperText>
              )}
            </FormControl>
            <TextField
              {...register("value")}
              label="Value"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="my-4"
              error={!!errors.value}
              helperText={errors.value ? errors.value.message : ""}
            />
            <TextField
              {...register("date")}
              label="Date"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="my-4"
              error={!!errors.date}
              helperText={errors.date ? errors.date.message : ""}
            />
            <FormControl className="my-4 w-[25rem]" error={!!errors.type}>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                {...register("status")}
                labelId="status-label"
                label="Status"
                inputProps={{
                  id: "status",
                }}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="closed">Closed</MenuItem>
              </Select>
              {errors.status && (
                <FormHelperText>{errors.status.message}</FormHelperText>
              )}
            </FormControl>
          </div>
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="submit">Save</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentDialogForm;
