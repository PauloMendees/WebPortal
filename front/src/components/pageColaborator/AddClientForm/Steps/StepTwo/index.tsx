import UploadZone from "../../../../shared/UploadZone";

type StepTwoProps = {
    handleDocument: (file: File) => void
}

export function StepTwo({handleDocument}: StepTwoProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className={`mb-1 text-primary-white text-base`}>
        {`Prova de Vida`}
      </label>
      <UploadZone
        handleUploadedFile={handleDocument}
        accept={{
          "video/mp4": [],
          "video/x-m4v": [],
          "video/*": []
        }}
      />
    </div>
  );
}
