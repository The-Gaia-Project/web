import { useLocation } from 'react-router-dom';

export default function ProjectDetails() {
    const location = useLocation();
    const { details } = location.state;

    return (
        <div>
            <h1>Project Details</h1>
            <p>{details}</p>
        </div>
    );
}
