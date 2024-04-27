import React from 'react';

const Categories = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: '50px',
        },
        categoryBox: {
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            cursor: 'pointer',
            width: '100px',
            height: '100px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={styles.container}>
                <div style={styles.categoryBox}>Home</div>
                <div style={styles.categoryBox}>Gold</div>
                <div style={styles.categoryBox}>Car</div>
            </div>
        </div>
    );
};

export default Categories;
