import { LinearProgress } from "@mui/material";
import SnackBar from "../../../../shared/SnackBar";
import UploadZone from "../../../../shared/UploadZone";
import { When } from "../../../../shared/When";

type StepTwoProps = {
  handleDocument: (file: File) => void;
  errorMessage: string;
  clearState: () => void;
  isLoading: boolean;
};

export function StepTwo({
  handleDocument,
  clearState,
  errorMessage,
  isLoading,
}: StepTwoProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <SnackBar
        message={errorMessage}
        clearState={clearState}
        severity="error"
      />
      <label className={`mb-1 text-primary-white text-base`}>
        {`Prova de Vida`}
      </label>
      <UploadZone
        handleUploadedFile={handleDocument}
        accept={{
          "video/*": [],
        }}
      />
      <When value={isLoading}>
        <LinearProgress color="primary" sx={{ width: "100%" }} />
      </When>
    </div>
  );
}
