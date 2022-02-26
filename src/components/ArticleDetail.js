import { useParams } from "react-router-dom"


function ArticleDetail() {

    const { articleId } = useParams()
    return (
        <div>
            {articleId}
        </div>
    )
}

export default ArticleDetail;