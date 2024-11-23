export function remove ({ request, response, database }) {
    const { id } = request.params

    database.delete("atividade", id)

    return response.end()
}