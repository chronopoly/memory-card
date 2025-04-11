export default function shuffleArray(array) {
    let currentIndex = array.length;

    // while there are still unshuffled element
    while (currentIndex != 0) {
        // create a random index
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swap element at random index with element at current index
        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}