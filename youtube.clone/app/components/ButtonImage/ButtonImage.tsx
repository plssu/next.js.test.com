'use client'

type ButtonProps = {
    icon: string;
    title: string;
};

export const ButtonImage = (props: ButtonProps) => {
    return (
        <div>
            <img src={props.icon} />
            {props.title}
        </div>
    );
}
