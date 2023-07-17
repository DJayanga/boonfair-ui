import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CustomButton } from '../Button/CustomButton';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet',
  'link', 'image'
];

export  const TextEditor: React.FC<TextEditorProps> = ({ onSubmit, title }) => {
  const [text, setText] = useState('');

  const handleChange = (value: string) => {
    setText(value);
  };

  const handleButtonClick = () => {
    onSubmit();
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
      <div style={{display:'flex', justifyContent:"flex-end", marginTop:'10px'}}>
        <CustomButton buttonName={title} onClick={handleButtonClick} />
      </div>
    </div>
  );
};

type TextEditorProps = {
  onSubmit: () => void;
  title:string;
};
