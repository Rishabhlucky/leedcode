var deleteDuplicates = function(head) {
    let arr =[];
    for(let i=0 ; i<head.length ; i++){
        if(head[i] == head[i+1]){
            head.splice(i , 1)
            console.log(i)
            i--
        }
    }
    console.log("head" , head)
    return head;
    };

    let head = [1,1,2,3,3,3, 4]
    deleteDuplicates(head)