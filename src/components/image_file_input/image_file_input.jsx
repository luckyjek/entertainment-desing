import React, { useRef } from 'react';
import styles from './image_file_input.module.css'

//1.사용자에게 이름을 받는다. (왜? 파일이름을 보여줄꺼야.)
//2.파일 업로드 및 사용자가 다른 파일을 선택했을때, 파일이 바뀐걸 알려주는 콜백함수도받아온다
const ImageFileInput = ({imageUploader, name, onFileChange}) => {
    const inputRef = useRef();

    const onButtonClick = (event) =>{
        event.preventDefault();
        inputRef.current.click();
    }
    const onChange = async event =>{
        // console.log(event.target.files[0]);
        const uploaded = await imageUploader.upload(event.target.files[0])//ImageUploader서비스에 전달
        console.log(uploaded);
        onFileChange({
            name: uploaded.original_filename,
            url: uploaded.url,
        })
    }

    return <div className={styles.container}>
        <input 
            ref={inputRef} 
            className={styles.input} 
            type="file" 
            accept="image/*" 
            name="file" 
            onChange={onChange}
        />
        <button className={styles.button} onClick={onButtonClick}> {name || 'No file'} </button>
    </div>
}

export default ImageFileInput;