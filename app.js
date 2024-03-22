import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import ImageUploadForm from './components/ImageUploadForm';
import ImageDisplay from './components/ImageDisplay';

const App = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [processedImage, setProcessedImage] = useState(null);

    const handleImageUpload = (image) => {
        // Code to upload image to backend and process
        // Update originalImage and processedImage state
    }

    return (
        <div>
            <NavigationBar />
            <ImageUploadForm handleImageUpload={handleImageUpload} />
            {originalImage && processedImage && <ImageDisplay originalImage={originalImage} processedImage={processedImage} />}
        </div>
    );
}

export default App;
