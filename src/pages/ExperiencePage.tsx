import React from 'react';
import { ProjectContainer } from '../components';

const ExperiencePage: React.FC = () => {
    return (
    <div className='main-container'>
        {/* Parafia Bielsko */}
        <ProjectContainer
            title='Parafia Ewangelicka Bielsko'
            tech_stack={["Python", "Typescript", "/", "Django", "React.js", "PostgreSQL"]}
            links={[
                {name: "Strona", href: "https://bielsko.luteranie.pl/", new_tab: true}
            ]}
        >
            <p>
Stworzyłem stronę internetową Parafii Ewangelickiej w Bielsku, projektując jej wygląd w Figmie
oraz implementując backend w Django i frontend w Reactcie. Projekt wykorzystuje
bazę danych PostgreSQL i działa w kontenerach Docker, co ułatwia wdrażanie i utrzymanie.
Całość wykonałem samodzielnie i obecnie zajmuję się administracją.
            </p>
        </ProjectContainer>
        <ProjectContainer
            title='HEDON'
            tech_stack={["Typescript", "/", "Next.js", "PostgreSQL"]}
            links={[
                {name: "Strona", href: "https://hedon.com.pl/", new_tab: true}
            ]}
        >
            <p>
Moim zadaniem było zaprojektowanie strony w Figmie oraz implementacja backendu
z wykorzystaniem Drizzle dla połączenia z bazą PostgreSQL. Byłem także odpowiedzialny
za utworzenie panelu administratora <br/> dla łatwego zarzadzania wyświetlaną zawartością.
            </p>
        </ProjectContainer>
    </div>
    );
}

export default ExperiencePage;