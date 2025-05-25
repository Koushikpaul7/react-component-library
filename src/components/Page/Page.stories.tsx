import Page from ".";

export default {
    title: "Components/Page",
    component: Page,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            description: "text",
            control:{
                type: "text",
            }
        },
        children: {
            description: "text",
            control:{
                type: "text",
            }
        },
    },
};
 export const PageOne ={
        args: {
            title: "Page Title",
            children: "Page Content",
        },
    };

export const PageTwo = {
    args: {
        title: "Page Title Two",
        children: "Page Content Two",
    },
};