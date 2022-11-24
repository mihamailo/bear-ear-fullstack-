import React, { useRef, ReactNode } from 'react'
import {FCWithChildren} from 'types/global';
interface FileUploadProps {
    setFile: Function;
    accept: string;
}

const FileUpload: FCWithChildren<FileUploadProps> = ({ setFile, accept, children }) => {
    const ref = useRef<HTMLInputElement>()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files[0])
    }

    return (
        <div onClick={() => ref.current.click()}>
            <input
                type="file"
                accept={accept}
                ref={ref}
                style={{ display: 'none' }}
                onChange={onChange}
            />
            {children}
        </div>
    )

}

export default FileUpload