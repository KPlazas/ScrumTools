import React, { useState, useEffect } from 'react';
import { createProject } from '../services/ProyectServices';
import { getAuthenticatedUser } from '../config/auth';
import { useTranslation } from 'react-i18next';
import Layout from './Layout';
const NewProject = () => {
    const [t, i18n] = useTranslation("global");
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
        <>
        <Layout/>
            <div class="boton-modal">
                <label for="btn-modal">
                    Abrir Modal
                </label>
            </div>
            <input type="checkbox" id="btn-modal" />
            <div class="container-modal">
                <div class="content-modal">
                    <div class="btn-cerrar">
                        <label for="btn-modal" class="bi bi-x-circle"></label>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <p>Crear Nuevo Proyecto</p>
                        <input
                            type="text"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                            class="name" placeholder="Ingresar nombre proyecto" />
                        <br />
                        <br />
                        <button class="save">{t("creation.project.button-send")}</button>
                    </form>
                </div>
            </div>
            <script src="app.js"></script>        
        </>
    );
};

export default NewProject;
