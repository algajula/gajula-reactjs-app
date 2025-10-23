import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";


function HomeComponent(){
    console.log('----HomeComponent--')

const home_content = "React.js, commonly known as React, is an open-source JavaScript library primarily used for building user interfaces (UIs) for web and mobile applications. It was developed by Facebook (now Meta) and is maintained by Meta and a large open-source community."+
    "\n Key Characteristics of React:"+
    "\n 1. Component-Based Architecture"+
    "\n 2. Declarative Programming"+
    "\n 3. Virtual DOM"+
    "\n 4. JSX (JavaScript XML)"+
    "\n 5. Unidirectional Data Flow"+
    "\n 6. Flexibility"+
    "\n React's popularity stems from its efficiency in handling dynamic and interactive UIs, its component-based structure promoting reusability, its performance benefits due to the Virtual DOM, and its large, active community providing extensive resources and tools. It is widely used for building single-page applications, complex web applications, and mobile applications with React Native.";

const multilines = home_content.split('\n');

return (

<div class="content_container">
    <div class="content" id="content">
        <div align="left">
            <UnauthenticatedTemplate>
              <p>Please Login</p>
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
                <label>
                    Introduction:
                    {multilines.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                </label>
              </AuthenticatedTemplate>
        </div>
    </div>
</div>
);
}

export default HomeComponent;