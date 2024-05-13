import React from 'react'
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import DefaultLayout from "@/components/Layouts/DefaultLayout";

import Image from 'next/image';


export default function TestPage() {
    return (
        <>
            <Breadcrumb pageName="Test" />
            <h1>TEST PAGE</h1>

            <Image width={20} height={20} src="/images/brand/brand-03.svg" alt="github" />

        </>
    )
}