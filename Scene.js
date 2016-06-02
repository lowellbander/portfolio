/**
 * Created by lowellbander on 6/1/16.
 */

class Scene {
    constructor({
        pieces, context
    }) {
        this.pieces = pieces;
        this.context = context;

        this.hideSelectedPiece = this.hideSelectedPiece.bind(this);
    }

    showSelectedPiece(piece) {
        const detail = Detail.render(piece);
        detail.onclick = this.hideSelectedPiece;
        this.context.appendChild(detail);
    }

    hideSelectedPiece() {
        this.context.removeChild(document.getElementById('detail'));
    }

    render() {
        this.pieces.forEach(piece => {
            const pieceDiv = piece.render();
            pieceDiv.onclick = this.showSelectedPiece.bind(this, piece);
            this.context.appendChild(pieceDiv);
        });
    }
}