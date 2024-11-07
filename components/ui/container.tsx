import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
    children: ReactNode;
    className?: string
    id?: string
}

export const Container = ({children, className, id}:ContainerProps) => {
    return(
        <div id={id} className={cn( "bg-primary w-full text-primary-foreground min-h-screen p-6 md:px-24 pt-14 place-content-center", className)}>
            {children}
        </div>
    )
}