import { useState } from "react";
import { Input } from "../../../components/ui/input/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/Button";
import { cn } from "../../../core/lib/cn";
import { setCookie } from "../../../core/lib/cookie";

function CreateInfoForm() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [fullNameError, setFullNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const fullNameHandler = (name: string):string => {
    if (!name || name.trim() === "") {
      return 'Name is required';
    }
    return "";
  };
  const emailHandler = (em: string):string => {
    if (!em || em.trim() === "") {
      return 'email is required';
    }
    return "";
  };
  const formHandler = () => {
    const nameError = fullNameHandler(fullName);
    const emailError = emailHandler(email);
    setFullNameError(nameError)
    setEmailError(emailError)
    if (!nameError && !emailError) {
      setCookie('fullName',fullName,1)
      // setCookie('email',email,1)
      navigate("/digit/newPin");
    }
  };
  return (
    <div className="w-[90%] h-60 flex flex-col gap-5">
      <Input
      // inputMode="numeric"
      // pattern="[0-9]"
        placeholder="Full name (as per Gov ID)"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        error={!!fullNameError}
        errorMessage={fullNameError}
        fullWidth
      />
      <Input
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!emailError}
        errorMessage={emailError}
        fullWidth
      />
      <Button onClick={formHandler}
      disabled={!fullName || !email}
       className={cn(
                  "h-12 rounded-2xl",
                  fullName && email
                    ? "dark:bg-white dark:text-black bg-black text-white"
                    : "text-white dark:bg-white dark:text-black bg-black",
                )}
      >Get OTP</Button>
    </div>
  );
}

export default CreateInfoForm;
