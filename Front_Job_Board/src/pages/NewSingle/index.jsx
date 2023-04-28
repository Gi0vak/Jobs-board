import './index.css';
import Topbar from '../../components/Topbar';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { CreateJob } from '../../API/api.js';
import { useNavigate } from 'react-router-dom';

const NewSingle = ({ theme, bodytheme }) => {
    const navigate = useNavigate();
    const [jobTitle, setJobTitle] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [logo, setLogo] = useState("");
    const [logoBackground, setLogoBackground] = useState("");
    const [contract, setContract] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [apply, setApply] = useState("");
    const [content, setContent] = useState("");
    const [content2, setContent2] = useState("");
    const [items, setItems] = useState([]);
    const [items2, setItems2] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmitCreate = async (e) => {
        e.preventDefault()
        const newJob = {
            position: jobTitle,
            company: companyName,
            logoBackground: logoBackground,
            contract: contract,
            location: location,
            website: website,
            apply: apply,
            description: jobDescription,
            requirements: {
                content: content,
                items: items
            },
            role: {
                content: content2,
                items: items2
            }
        };
        try {
            await CreateJob(newJob);
            navigate("/admin");

        } catch (error) {
            console.log('Error creating job:', error);
        }

    };


    return (
        <section className={`New-single ${bodytheme}`}>
            <Topbar />
            <section className="new-single-body">
                <form className={`new-single-form ${theme}`} onSubmit={handleSubmitCreate}>
                    <label htmlFor="job-title">Job Title</label>
                    <input
                        type="text"
                        id="job-title"
                        value={jobTitle}
                        onChange={(event) => setJobTitle(event.target.value)}
                    />

                    <label htmlFor="company-name">Company Name</label>
                    <input
                        type="text"
                        id="company-name"
                        value={companyName}
                        onChange={(event) => setCompanyName(event.target.value)}
                    />

                    <label htmlFor="logo">Logo</label>
                    <input
                        type="text"
                        id="logo"
                        value={logo}
                        placeholder='logo foot par défaut'
                        onChange={(event) => setLogo(event.target.value)}
                    />

                    <label htmlFor="logo-background">Color Background</label>
                    <input
                        type="text"
                        id="logo-background"
                        value={logoBackground}
                        onChange={(event) => setLogoBackground(event.target.value)}
                    />
                    <label htmlFor="contract">contract</label>
                    <input
                        type="text"
                        id="contract"
                        value={contract}
                        onChange={(event) => setContract(event.target.value)}
                    />

                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                    />

                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        id="website"
                        value={website}
                        onChange={(event) => setWebsite(event.target.value)}
                    />

                    <label htmlFor="apply">Apply</label>
                    <input
                        type="text"
                        id="apply"
                        value={apply}
                        onChange={(event) => setApply(event.target.value)}
                    />
                    <label htmlFor="job-description">Job Description</label>
                    <textarea
                        id="job-description"
                        value={jobDescription}
                        onChange={(event) => setJobDescription(event.target.value)}
                    ></textarea>
                    <label htmlFor="content">content</label>
                    <input
                        type="text"
                        id="content"
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                    <label htmlFor="items">items</label>
                    <input
                        type="text"
                        id="items"
                        value={items}
                        onChange={(event) => setItems(event.target.value)}
                    />
                    <label htmlFor="content2">content2</label>
                    <input
                        type="text"
                        id="content2"
                        value={content2}
                        onChange={(event) => setContent2(event.target.value)}
                    />
                    <label htmlFor="items2">items2</label>
                    <input
                        type="text"
                        id="items2"
                        value={items2}
                        onChange={(event) => setItems2(event.target.value)}
                    />

                    <button className="button-one" type="submit">Add Job</button>
                </form>
                {success && <p className="success">Job added successfully</p>}
            </section>
            <Footer />
        </section>
    );
};


export default NewSingle;
