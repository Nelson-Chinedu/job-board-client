import { useState } from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const getBase64 = (img: any, callback: Function) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

const beforeUpload = (file: any) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}


const ImageUpload = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
    }

    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (url: any) => {
        setLoading(false)
        setImageUrl(url);
      }
      );
    }
  };

  const uploadButton = (
    <div>
      { loading ? <LoadingOutlined /> : <PlusOutlined /> }
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  if (imageUrl) {
    localStorage.setItem('companyLogo', imageUrl);
  }

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  )
}

export default ImageUpload;
