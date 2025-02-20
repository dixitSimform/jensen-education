// Define types for the data structure
export type Record = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    department: string;
    role: string;
    unit: string;
    class: string;
    image: string;
  };
  
  export type Filters = {
    role: string[];
    unit: string[];
    class: string[];
    department: string[];
  };
  