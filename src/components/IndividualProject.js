import React, {useState} from 'react';
import {FaTrashAlt} from "react-icons/fa";
import { useProjectsValue, useSelectedProjectvalue } from '../context';
import {firebase} from '../firebase';

export const IndividualProject = ({project}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const {projects, setProjects} = useProjectsValue();
    const {setSelectedProjects} = useSelectedProjectvalue();

    const deleteProject = docId => {
        firebase.firestore.collection('projects')
        .doc(docId).delete().then(() => {
            setProjects([...projects]);
            setSelectedProjects('INBOX');
        })
    }
}