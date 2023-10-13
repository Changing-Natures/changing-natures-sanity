import { Stack, Button, Card } from '@sanity/ui'

export const SyncDatabase = () => {

    const SERVER = "..."

    let working = false;

    const hitServer = () => {
        working = true;

        let myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json")

        const requestOptions: RequestInit = {
            method: "POST",
            headers: myHeaders,
            redirect: "follow",
        }

        fetch(SERVER, requestOptions)
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }


    return <Stack padding={0} space={[3, 3, 4, 5]}>
        <Card >
            <Button
                onClick={hitServer}
                fontSize={[2, 2, 3]}
                padding={[3, 3, 4]}
                text="Sync Database"
                tone="primary"
            />
        </Card>
    </Stack>
}

