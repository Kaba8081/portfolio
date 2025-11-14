import React from 'react';
import { ProjectContainer } from '../components';

const ProjectsPage: React.FC = () => {
    return (
    <div className='main-container'>
        {/* BiteHack - eSenior */}
        <ProjectContainer
            title='eSenior'
            tech_stack={["Python", "Django", "Next.js"]}
            links={[
                {name: "Github", href:"https://github.com/DROP-TABLE-Druzyny/BiteHack", new_tab: true},
                {name: "Demo", href:"/projects/esenior"}
            ]}
        >
            <p>
Projekt eSenior zdobył pierwsze miejsce na hackathonie Bitehack 2024, 
gdzie stworzyliśmy rozwiązanie wspierające osoby starsze w korzystaniu 
z nowoczesnych technologii. Byłem odpowiedzialny za backend oparty na Django
oraz przygotowanie API dla części frontendowej w Next.js.
            </p>
        </ProjectContainer>

        {/* ApexCompanion */}
        <ProjectContainer
            title='Apex Companion'
            tech_stack={["Python", "OpenCV", "pyautogui"]}
            links={[
                {name: "Github", href:"https://github.com/Kaba8081/ApexCompanion", new_tab: true},
            ]}
        >
            <p>
Projekt Apex-Companion wykorzystuje pyautogui do automatycznego przechwytywania
zrzutów ekranu z gry oraz OpenCV do analizy obrazu i identyfikacji pozycji gracza na mapie. 
Zebrane dane są następnie przetwarzane w celu wygenerowania heatmapy.
            </p>
        </ProjectContainer>

        {/* SK-AIO */}
        <ProjectContainer
            title='SK-AIO'
            tech_stack={["Python"]}
            links={[
                {name: "Github", href:"https://github.com/SerwisKacperek/sk-aio", new_tab: true},
            ]}
        >
            <p>
Jest to narzędzie wiersza poleceń, pozwalające na ładowanie pluginów stworzonych przez
użytkowników. Głównym założeniem było stworzenie interfejsu dla skryptów do automatyzacji
zadań, aby nie duplikować kodu z każdym nowym narzędziem.
            </p>
        </ProjectContainer>
    </div>
    );
}

export default ProjectsPage;