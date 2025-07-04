import { useState, type ReactNode } from "react";
import Background from "../src/assets/background.svg";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import Header from "./component/Header";

const App = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    noOfWheels: "",
    typeOfVehicle: "",
    vehicleModel: "",
    startDate: "",
    endDate: "",
  };

  const [currentView, setCurrentView] = useState<number>(0);
  const [payload, setPayload] = useState(initialState);

  const NameComponent = () => {
    return (
      <div className="flex flex-col h-full justify-between gap-6">
        <p className="text-red-700 text-3xl">First, what's your name?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-amber-100/60 h-full p-6">
          <CustomTextField label="First Name" />
          <CustomTextField label="Last Name" />
        </div>
        <div className="flex justify-end">
          <Button color="primary" variant="contained" size="large">
            Next
          </Button>
        </div>
      </div>
    );
  };

  const NoOfWheelsComponent = () => {
    return (
      <div className="flex flex-col h-full justify-between gap-6">
        <p className="text-red-700 text-3xl">How many wheels do you need?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-amber-100/40 h-full p-6">
          <CustomRadios
            label="No. of wheels"
            value=""
            options={[
              {
                label: "4",
                value: "4",
              },
              {
                label: "2",
                value: "2",
              },
            ]}
            onChange={() => {}}
          />
        </div>
        <div className="flex justify-end">
          <Button color="primary" variant="contained" size="large">
            Next
          </Button>
        </div>
      </div>
    );
  };

  const TypeOfVehicleComponent = () => {
    return <div>hi</div>;
  };

  const SpecificModelComponent = () => {
    return <div>hi</div>;
  };

  const DateRangeComponent = () => {
    return <div>Hi</div>;
  };

  const viewArray = [
    <NameComponent />,
    <NoOfWheelsComponent />,
    <TypeOfVehicleComponent />,
    <SpecificModelComponent />,
    <DateRangeComponent />,
  ];

  return (
    <Layout>
      <CardContainer>{viewArray[currentView]}</CardContainer>
    </Layout>
  );
};

interface option {
  label: string;
  value: string;
}

const CustomRadios = ({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
}) => {
  return (
    <FormControl>
      <FormLabel color="primary">{label}</FormLabel>
      <RadioGroup onChange={onChange} value={value}>
        {options.map((option) => (
          <FormControlLabel
            label={option.label}
            value={option.value}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

const CustomTextField = ({
  label,
  errorMessage,
}: {
  label: string;
  errorMessage?: string;
}) => {
  return (
    <div className="flex flex-col">
      <TextField label={label} />
      {errorMessage && (
        <p className="text-xs mt-1 ml-1 text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white h-screen w-full relative flex flex-col gap-2">
      {/* <BackgroundImage /> */}
      <Header />
      <div className="h-full flex justify-center items-center">{children}</div>
    </div>
  );
};

const CardContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="z-10 border border-black/10 shadow p-6   md:w-1/2 w-full">
      {children}
    </div>
  );
};

const BackgroundImage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="w-full h-full bg-center bg-no-repeat bg-contain opacity-30 top-0 absolute"
    ></div>
  );
};

export default App;
