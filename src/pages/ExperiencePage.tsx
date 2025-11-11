import React from 'react';
import { ProjectContainer } from '../components';

const ExperiencePage: React.FC = () => {
    return (
    <div className='main-container gap-y-12 w-full'>
        {/* Parafia Bielsko */}
        <ProjectContainer
            title='Parafia Ewangelicka Bielsko'
            tech_stack={["Python", "Typescript", "/", "Django", "React.js", "PostgreSQL"]}
            links={[
                {name: "Strona", href:"https://bielsko.luteranie.pl/"}
            ]}
        >
            <p className='w-full text-wrap'>
Stworzyłem stronę internetową parafii ewangelickiej w Bielsku, projektując jej wygląd w Figmie
oraz implementując backend w Django i frontend w Reactcie. Aplikacja korzysta
z bazy danych PostgreSQL i działa w kontenerach Docker, co ułatwia wdrażanie i utrzymanie.
Całość wykonałem samodzielnie i obecnie zajmuję się jej administracją.
            </p>
        </ProjectContainer>
    </div>
    );
}

export default ExperiencePage;