
module.exports = {
    bubbleSort(elementArray) {
        let numberArray = elementArray;
        //for pass
        for(let k = 1; k < numberArray.length; k++){
            let flag = false;
            let temp;

            for(let i = 0; i < numberArray.length - 1; i++){
                if(numberArray[i] > numberArray[i+1]){
                    //swapping values
                    temp = numberArray[i+1];
					numberArray[i+1] = numberArray[i];
					numberArray[i] = temp;
                    //sorting is done
                    flag = true;
                }
            }
            //checking if array is sorted / not
            if(flag === false){
                break;
            }
        } 
        return numberArray;
    },

    insertionSort(elementArray) {
        let number;
        let hole = 0;
        for(let i = 1; i < elementArray.length; i++){
            number = elementArray[i];
            hole = i;
            while(hole > 0 && elementArray[hole-1] > number) {	
				//swapping the values
				elementArray[hole] = elementArray[hole -1];
				hole = hole -1;
			}
            elementArray[hole] = number;
        }
        return elementArray;
    },

    selectionSort(elementArray) {
        let min;
        let temp;
        for(let i = 0; i < elementArray.length - 1; i++){
            min = i;
            for(let j = i+1; j < elementArray.length; j++){
                if(elementArray[j] < elementArray[min]){
                    min = j;
                }
                //swapping the values
                temp = elementArray[i];
                elementArray[i] = elementArray [min];
                elementArray[min] = temp;
            }
        }
        return elementArray;
    },

    binarySearch(elementArray, no) {
        let flag = false;
        let mid;
        let start = 0;
        let end = elementArray.length - 1;
        while(start <= end) {
            mid = (start + end)/2;
            // removing fraction part
            mid = ~~mid;
            // checking no with mid
            if(elementArray[mid] === no){
                console.log(`Got ${no} in list of numbers at ${mid} position`);
                flag = true;
                return flag;
            }
            else if(no < elementArray[mid]){
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
        }
        return flag;
    }
}