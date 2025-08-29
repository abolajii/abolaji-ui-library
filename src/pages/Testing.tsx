// import React from "react";

import { Input } from "../components/ui/Input";
import { Mail } from "lucide-react";
import { useState } from "react";

const Testing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-4">
      <Input
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        helperText="We'll never share your email."
        icon={Mail}
        // error={errors.email}
      />

      <Input
        placeholder="Enter your email"
        required
        icon={Mail}
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        // error={errors.email}
        helperText="We'll never share your email."
      />
      <Input
        placeholder="Enter your password"
        required
        // icon={Lock}
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        // error={errors.password}
        helperText="Don't share your password."
      />
    </div>
    // <div className="bg-gray-50 p-6 rounded-lg space-y-4">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //     <Input
    //       label="With Icon"
    //       placeholder="Search..."
    //       value=""
    //       onChange={() => {}}
    //       icon={Search}
    //     />
    //     {/*
    //     <Input
    //       label="Email"
    //       type="email"
    //       placeholder="user@example.com"
    //       value=""
    //       onChange={() => {}}
    //       icon={Mail}
    //       helperText="Please enter a valid email address."
    //     />
    //     <Input
    //       label="Required Field"
    //       placeholder="This field is required"
    //       value=""
    //       onChange={() => {}}
    //       required
    //     />
    //     <Input
    //       label="With Error"
    //       placeholder="Invalid input"
    //       value=""
    //       onChange={() => {}}
    //       error="This field is required"
    //     />
    //     <Input
    //       label="Disabled"
    //       placeholder="Disabled input"
    //       value=""
    //       onChange={() => {}}
    //       disabled
    //     /> */}
    //   </div>
    // </div>
  );
};

export default Testing;
