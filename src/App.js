import React , {useState, useEffect}from 'react';
import Header from './components/Header/Header';
import { Grid, Typography , CssBaseline} from '@material-ui/core';
import DrawerComponent from './components/Drawer/Drawer';
import List from './components/List/List';
import SortingVisualizer from './components/SortingVisualizer/SortingVisualizer';
import Bars from './components/Bars/Bars';
//algos
import bubbleSort  from './components/sortingAlgorithms/bubblesort';
import mergeSort from './components/sortingAlgorithms/mergesort';
import insertionSort from './components/sortingAlgorithms/insertionsort';
const App=()=>{

  //github code 
  const generateRandomArray = (len) => {
		setCompleted(false)
		setSorting(false)
		setSortedIndex([])

		const randomArray = Array.from(Array(len + 1).keys()).slice(1)
		
		for (let i = randomArray.length - 1; i > 0; i--) {
			const randomIndex = Math.floor(Math.random() * (i - 1))
			const temp = randomArray[i]

			randomArray[i] = randomArray[randomIndex]
			randomArray[randomIndex] = temp
		}
		
		setBlocks(randomArray)
	}

	// States
	const [algo, setAlgo] = useState('bubbleSort')
	const [len, setLength] = useState(30)
	const [blocks, setBlocks] = useState([])
	const [sorting, setSorting] = useState(false)
	const [completed, setCompleted] = useState(true)
	const [speed, setSpeed] = useState(250)
	const [compare, setCompare] = useState([])
	const [swap, setSwap] = useState([])
	const [sortedIndex, setSortedIndex] = useState([])

	// Generating random array every time the length is changed by th user
	useEffect(() => {
		generateRandomArray(len)
	}, [len, algo])

	// setting the selected algorithm
	const handleAlgo = (event) => {
		setAlgo(event.target.value)
	}

	// handling the length of the array
	const handleLength = (event) => {
		setLength(Number(event.target.value))
	}

	// handling the speed of sorting
	const handleSpeed = (event) => {
		setSpeed(Math.ceil(400 / Number(event.target.value)))
	}

	// Sorting according to the algorithm
	const handleSort = () => {
		
		const sortAccOrder = (order) => {
			(function loop(i) {
				setTimeout(function () {
					const [j, k, arr, index] = order[i]
					setCompare([j, k])
					setSwap([])

					if(index !== null){
						setSortedIndex((prevState) => (
							[...prevState, index]
						))
					}
		
					if(arr){
						
						setBlocks(arr)
						if(j !== null || k != null)
							setSwap([j, k])

					}

					if (++i < order.length){
						loop(i)
					} else {
						setSorting(false)
						setCompleted(true)
					}   
				}, speed)
			})(0)
			
		}

		setSorting(true)

		algo === 'bubbleSort' ? sortAccOrder(bubbleSort(blocks)) : 
		algo === 'insertionSort' ?  sortAccOrder(insertionSort(blocks)) :
		// algo === 'selectionSort' ? sortAccOrder(selectionSort(blocks)) :
		algo === 'mergeSort' ? sortAccOrder(mergeSort(blocks)) : 
 (() => {
			setSorting(false)
			setCompleted(true)
		})()
	}


  return (
    <div>
    
    <CssBaseline/>
        <Header/>
    
      
      <Grid >

          <Grid item xs = { 12 } md = { 4 }  >
              {/* <DrawerComponent/> */}
              <List
                generateRandomArray={() => generateRandomArray(len)}
                handleLength={handleLength} 
                handleSpeed={handleSpeed}
                handleAlgo={handleAlgo}
                handleSort={handleSort} 
                sorting={sorting}
                completed={completed}
                len={len}
                speed={speed}
                algo={algo}
              />
            </Grid>
           </Grid>
          {/* <Grid item xs = { 12 } md = { 8 } > */}
              <Bars 
                blocks={blocks} 
                compare={sorting && compare}
                swap={sorting && swap}
                sorted={sortedIndex} 
			          />
           
          {/* </Grid> */}
            
     
    </div>
  );
}
export default App;