interface PropsVal {
    id?: number;
}

interface PageProps {
    params: PropsVal;
}

export default async function productPage({ params }: PageProps) {
    const { id } = params;
    return (
        <div>This is Simplilearn page with Id {id}</div>
    );
}