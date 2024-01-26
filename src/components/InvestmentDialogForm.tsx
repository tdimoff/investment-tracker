import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "@/src/schemas/investment.schema";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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
  const { register, handleSubmit } = useForm<IInvestmentItem>({
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
    dispatch(createInvestmentThunk(data));
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
              className="my-4"
            />
            <TextField
              {...register("type")}
              label="Type"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="my-4"
            />
            <TextField
              {...register("value")}
              label="Value"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="my-4"
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
            />
            <TextField
              {...register("status")}
              label="Status"
              variant="outlined"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              className="my-4"
            />
          </div>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit" form="investment-form">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InvestmentDialogForm;
