import {
  ChangeEvent,
  DragEvent,
  HTMLAttributes,
  useCallback,
  useRef,
  useState,
} from "react";
import styled from "styled-components";

import { Text } from "@shared/ui";
import { AttachmentIcon } from "@shared/ui/icons";
import { CommonInputStyle } from "@shared/ui/inputs/_styles.ts";
import { Color } from "@shared/ui/text/_types.ts";

const DropZone = styled.div<{ $isDragging: boolean; $color?: Color }>`
  ${CommonInputStyle};
  height: 76px;
  border: 1px solid
    ${({ $isDragging, theme }) => ($isDragging ? theme.blue : "#000000")};
  background-color: #fff;
  cursor: pointer;
  transition: border-color 0.2s;
  padding: 7px 16px;
  margin-bottom: 12px;
`;

const FileList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FileItem = styled.div`
  padding: 8px;
  background-color: #373333;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FileName = styled(Text)`
  text-overflow-ellipsis: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ff4d4f;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const UploadButton = styled.button<{ $color?: Color }>`
  ${CommonInputStyle};
  margin-top: 12px;
  width: auto;
  display: flex;
  gap: 8px;
  align-items: center;
  align-self: flex-start;
  padding: 3px 12px 3px 0;
  border-radius: 4px;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const getUniqueFiles = (existingFiles: File[], newFiles: File[]) => {
  const existingFileNames = new Set(existingFiles.map((file) => file.name));
  return newFiles.filter((file) => !existingFileNames.has(file.name));
};

type BaseInoutProps = Omit<HTMLAttributes<HTMLInputElement>, "onChange">;

type FileUploadProps = BaseInoutProps & {
  onChange?: (files: File[]) => void;
  name?: string;
};

export const FileUpload = ({ onChange, name }: FileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleAddFiles = useCallback(
    (newFiles: File[]) => {
      const uniqueFiles = getUniqueFiles(files, newFiles);
      setFiles((prev) => [...prev, ...uniqueFiles]);
      onChange?.(uniqueFiles);
    },
    [files, onChange],
  );

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleAddFiles(Array.from(e.dataTransfer.files));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleAddFiles(Array.from(e.target.files || []));
  };

  const handleRemoveFile = (fileName: string) => {
    setFiles((prev) => prev.filter((file) => file.name !== fileName));
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <DropZone
        $isDragging={isDragging}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={openFilePicker}
      >
        {isDragging
          ? "Отпустите для добавления"
          : "Прикрепите или перетащите сюда файлы"}
      </DropZone>

      <FileInput
        ref={fileInputRef}
        id={name}
        type="file"
        multiple
        onChange={handleFileChange}
      />

      <FileList>
        {files.map((file) => (
          <FileItem key={file.name}>
            <FileName $size={"body-m"} $color={"primary"}>
              {file.name}
            </FileName>
            <RemoveButton onClick={() => handleRemoveFile(file.name)}>
              Удалить
            </RemoveButton>
          </FileItem>
        ))}
      </FileList>

      <UploadButton onClick={openFilePicker}>
        <img src={AttachmentIcon} alt={"attachment"} />
        <Text $size={"body-m"}>Вставить файл</Text>
      </UploadButton>
    </>
  );
};
