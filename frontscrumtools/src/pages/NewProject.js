import React, { useState, useEffect } from 'react';
import { createProject } from '../services/ProyectServices';
import { getAuthenticatedUser } from '../config/auth';

const NewProject = () => {
    const [projectName, setProjectName] = useState('');
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getUser() {
            const user = await getAuthenticatedUser();
            setUser(user);
        }
        getUser();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const projectData = {
                projectName,
                userId: user.profile.sub
            };
            const response = await createProject(projectData);
            console.log('Proyecto creado:', response);
        } catch (error) {
            console.error('Error al crear el proyecto:', error);
        }
        alert("Proyecto creado");
    };

    return (
        <div class="contactBody">
            <div class="wrapper">
                <form onSubmit={handleSubmit} className='form'>
                    <label>
                        Nombre del proyecto:
                        <input
                            className='name entry'
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            placeholder='toma mango'
                        />
                    </label>
                    <button type="submit" className='submit entry'>Crear proyecto</button>
                </form>
                <div class="shadow"></div>
            </div>
            <script src="app.js"></script>
        </div>

    );
};

export default NewProject;
