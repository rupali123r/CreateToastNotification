


		const notifications = document.querySelector(".notification"),

			buttons = document.querySelectorAll(".buttons .btn");

		const toastDetails = {
			timer: 9000,
			success: {
				icon: " bi bi-check-circle-fill",
				text: "Success: This is a success toast."
			},

			error: {
				icon: " bi bi-x-circle-fill",
				text: "Error: This is a Error toast."
			},

			warning: {
				icon: " bi bi-exclamation-triangle-fill",
				text: "Warning: This is a Warning toast."
			},

			info: {
				icon: " bi bi-exclamation-circle-fill",
				text: "Info: This is a Info toast."
			}

		}

		const removeToast = (toast) =>{
			toast.classList.add("hide");
			if(toast.timeoutId) clearTimeout(toast.timeoutId);  // Clearing the timeout for the toast
			setTimeout(() => toast.remove(), 500) // Removing the toast after 500s

		}

		const createToast = (id) => {

			// Getting the icon and text for the toast based on the id passed
			const { icon, text } = toastDetails[id];
			const toast = document.createElement("li");  // Creating a new 'li' element for the toast
			toast.className = `toast ${id}`;  // Setting the classes for the toast

			// setting the inner HTML for the toast
			toast.innerHTML = `<div class="column">
			<i class="bi ${icon}"></i>
				<span>${text}</span>
			</div>
			<i class="material-symbols-outlined" onclick="removeToast(this.parentElement)">
				close</i>`;

			notifications.appendChild(toast); // Append the toast to the notification ul
			//Setting a timeout to remove the after the specified duration
			toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
		}

		// Adding a click event listener to each button to create a toast when clicked

		buttons.forEach(btn => {
			btn.addEventListener("click", () => createToast(btn.id));
		});




















