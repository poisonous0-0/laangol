import React, { useEffect, useState } from "react";
import sending from "../../assets/sending.png";
import { io } from "socket.io-client";

// User interface
interface User {
	id: number;
	name: string;
	message: string;
	time: string;
	avatar: string;
}

// Sample user data
const usersData: User[] = [
	{
		id: 1,
		name: "Maaz Bin Hossain",
		message: "Ayoo!",
		time: "12:11 PM",
		avatar: "user1.jpg",
	},
	{
		id: 2,
		name: "Kamrul Hasan",
		message: "Shei banaiso bhaiya",
		time: "12:12 PM",
		avatar: "user2.jpg",
	},
];

// Connect to the socket server
const socket = io("http://localhost:3000"); // Replace with your server URL

const Chat: React.FC = () => {
	// Assuming the user ID is available (replace it with actual user ID logic)
	const loggedInUserId = 1; // Replace this with the actual logged-in user's ID from context or props

	const [selectedUser, setSelectedUser] = useState<User | null>(usersData[0]);
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState<
		{ sender: string; message: string }[]
	>([]);

	useEffect(() => {
		// Emit the user ID to the server upon connection
		socket.on("connect", () => {
			console.log("Connected to server");
			socket.emit("connected", loggedInUserId); // Send the actual user ID to the server
		});

		// Listen for incoming messages
		socket.on(
			"messageReceived",
			(data: { sender: string; message: string }) => {
				setMessages((prevMessages) => [...prevMessages, data]);
			}
		);

		// Cleanup on component unmount
		return () => {
			socket.off("connect");
			socket.off("messageReceived");
		};
	}, [loggedInUserId]);

	// User selection function
	const selectUser = (user: User) => {
		setSelectedUser(user);
		setMessages([]); // Clear messages when a new user is selected
	};

	// Sending message function
	const sendMessage = () => {
		if (message.trim() === "" || !selectedUser) return;

		const messageData = {
			myId: loggedInUserId, // Use the actual logged-in user's ID
			userId: selectedUser.id,
			message: message,
		};

		// Emit the sendEvent event to the server
		socket.emit("sendEvent", messageData);

		// Add sent message to the chat
		setMessages((prevMessages) => [
			...prevMessages,
			{ sender: "You", message },
		]);

		// Clear the message input
		setMessage("");
	};

	return (
		<div className="h-screen w-full flex flex-col md:flex-row bg-[#F5FCE4]">
			{/* User List Section */}
			<div className="w-full md:w-1/4 bg-[#EFF8C6] p-4 border-b md:border-b-0 md:border-r border-[#D7F07C]">
				<h2 className="text-2xl font-bold text-[#8EA604] mb-4">Chat</h2>
				<ul>
					{usersData.map((user) => (
						<li
							key={user.id}
							className={`flex items-center space-x-3 p-3 cursor-pointer rounded-md hover:bg-[#D7F07C] ${
								selectedUser?.id === user.id ? "bg-[#D7F07C]" : ""
							}`}
							onClick={() => selectUser(user)}
						>
							<img
								src={user.avatar}
								alt={user.name}
								className="w-10 h-10 rounded-full"
							/>
							<div className="flex-1">
								<h3 className="text-lg font-medium text-[#4F5D2F]">
									{user.name}
								</h3>
								<p className="text-sm text-[#5F7A3A] truncate">
									{user.message}
								</p>
							</div>
							<span className="text-xs text-[#98C853]">{user.time}</span>
						</li>
					))}
				</ul>
			</div>

			{/* Chat Section */}
			<div className="w-full md:w-3/4 p-6 flex flex-col justify-between">
				<div>
					{selectedUser && (
						<>
							<div className="flex justify-between items-center mb-4">
								<h2 className="text-lg font-semibold text-[#4F5D2F]">
									{selectedUser.name}
								</h2>
								<span className="text-sm text-[#98C853]">
									{selectedUser.time}
								</span>
							</div>
							<div className="border border-[#D7F07C] rounded-md p-4 bg-[#F5FCE4]">
								{messages.map((msg, index) => (
									<p
										key={index}
										className={`text-[#4F5D2F] ${
											msg.sender === "You" ? "font-bold" : ""
										}`}
									>
										{msg.sender}: {msg.message}
									</p>
								))}
							</div>
						</>
					)}
				</div>

				{/* Message Input Section */}
				<div className="mt-4">
					<input
						type="text"
						className="w-full border border-lime-100 rounded-md p-3 mb-2 bg-[#F5FCE4] text-lime-200 outline-none"
						placeholder="Type your message here..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<div className="flex justify-end">
						<button
							onClick={sendMessage}
							className="bg-lime-100 flex items-center text-lime-200 px-4 py-2 rounded-md hover:bg-lime-200 hover:text-white transition-all"
						>
							<p>Send</p>
							<img src={sending} alt="" className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Chat;
