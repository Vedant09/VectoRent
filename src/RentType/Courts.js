import React, { useState } from 'react';

export default function Courts() {
    const [formData, setFormData] = useState({
        type: '',
        name: '',
        location: '',
        price: '',
        timings: '',
        phone: '',
        washroom: false,
        description: '',
        rating: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/vec/court', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',  // Added for compatibility
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const result = await response.text();
            alert(result); // Display success or failure message
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding court.');
        }
    };

    return (
        <div>
            <h1>Courts</h1>
            <form onSubmit={handleSubmit}>
                <input name="type" value={formData.type} onChange={handleChange} placeholder="Type" required />
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
                <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
                <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" required />
                <input name="timings" value={formData.timings} onChange={handleChange} placeholder="Timings" required />
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
                
                <label>
                    Washroom:
                    <input
                        type="checkbox"
                        name="washroom"
                        checked={formData.washroom}
                        onChange={handleChange}
                    />
                </label>

                <input name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
                <input name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating" required />
                
                <button type="submit">Add Court</button>
            </form>
        </div>
    );
}
