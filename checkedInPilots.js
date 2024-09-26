import wixData from 'wix-data';


export async function removeCheckedInPilot(id){
	await wixData.remove("CheckedInPilots", id)
	.then((res)=>{
		console.log("Checked-in pilot removed", res)
		
	}).catch((err)=>{
		console.log(err)
	})
}

$w.onReady(function () {

	$w("#listRepeater").onItemReady(($item, itemData, index) => {

		// Add the onClick event handler for the button inside the repeater
		$item("#button57").onClick(async () => {
			// Now you can access the data for the specific item
			const itemId = itemData._id// Access the unique ID or any other field
			await removeCheckedInPilot(itemId);
			$w("#dynamicDataset").refresh().then(()=>{
				console.log("dataset refreshed")
			}).catch((err)=>{
				console.log(err)
			});
			
		});
	});
});