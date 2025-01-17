import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/react.svg";
import L_POSTGRESQL from "../../assets/img/skills/react.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";

import "./projects-timeline.style.css";

const TimeLine = () => {
	return (
		<div id="projects">
			<h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
			<Timeline>
				<Events>
					{/* Project: Todo List With MUI */}
					<ImageEvent
						date="01/10/2020"
						className="text-center"
						text="React ToDo App"
						src={L_PYTHON}
						alt="React ToDo App"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey="0"
											className="p-2 text-center accordian-main"
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse
											eventKey="0"
											className="text-left"
										>
											<Card.Body>
												<strong>Description:</strong>{" "}
												This is a Todo App created with
												React and Material UI that keeps
												a track of your Todos
												<hr />
												<strong>Features:</strong>
												<ul className="list-styles pt-1">
													<li>
														Keeps track of your
														Todos
													</li>
													<li>
														Powered by React and
														Material UI
													</li>
													<li>Respoisive Design</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className="p-2">
															<Image
																src={L_HTML5}
																alt="HTML 5"
																rounded
																className="image-style m-1"
															></Image>{" "}
															HTML5
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_CSS3}
																alt="CSS 3"
																rounded
																className="image-style m-1"
															></Image>{" "}
															CSS3
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_REACT}
																alt="React"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															React
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_MATERIALUI
																}
																alt="Material-UI"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															Material-UI
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className="d-flex justify-content-between flex-nowrap text-center">
								<UrlButton href="" target="_blank">
									SEE LIVE
								</UrlButton>
								<UrlButton href="" target="_blank">
									SOURCE CODE
								</UrlButton>
								<UrlButton href="" target="_blank">
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: MERN Tip Calculator */}
					<ImageEvent
						date="16/09/2020"
						className="text-center"
						text="MERN Tip Calculator"
						src={L_PYTHON}
						alt="MERN Tip Calculator"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey="0"
											className="p-2 text-center accordian-main"
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse
											eventKey="0"
											className="text-left"
										>
											<Card.Body>
												<strong>Description:</strong>{" "}
												This app calculates Tip for the
												amount entered and percentage of
												tip to be given. It uses MERN
												stack build to acomplish the
												same.
												<hr />
												<strong>Features:</strong>
												<ul className="list-styles pt-1">
													<li>
														Enter amount upto your
														desire
													</li>
													<li>
														Real-time API calls with
														Backend features
													</li>
													<li>
														Styled with Material-UI
													</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className="p-2">
															<Image
																src={L_REACT}
																alt="React"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															React
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_NODE_JS}
																alt="Node.js"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															Node.js
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_EXPRESS}
																alt="Express"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															Express
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_MONGODB}
																alt="MongoDB"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															MongoDB
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_MATERIALUI
																}
																alt="Material-UI"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															Material-UI
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className="d-flex justify-content-between flex-nowrap text-center">
								<UrlButton href="" target="_blank">
									SOURCE CODE
								</UrlButton>
								<UrlButton href="" target="_blank">
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Get GitHub Info */}
					<ImageEvent
						date="19/07/2020"
						className="text-center"
						text="Get GitHub Info"
						src={L_PYTHON}
						alt="Get GitHub Info"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey="0"
											className="p-2 text-center accordian-main"
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse
											eventKey="0"
											className="text-left"
										>
											<Card.Body>
												<strong>Description:</strong> An
												app that searches people on
												GitHub with non-private account
												and see all their details using
												GitHub API
												<hr />
												<strong>Features:</strong>
												<ul className="list-styles pt-1">
													<li>
														Search any Github
														profile
													</li>
													<li>Real-time API calls</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className="p-2">
															<Image
																src={L_HTML5}
																alt="HTML 5"
																rounded
																className="image-style m-1"
															></Image>{" "}
															HTML5
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_CSS3}
																alt="CSS 3"
																rounded
																className="image-style m-1"
															></Image>{" "}
															CSS3
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_REACT}
																alt="React"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															React
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_GIT}
																alt="Github API"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															GitHub API
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className="d-flex justify-content-between flex-nowrap text-center">
								<UrlButton href="" target="_blank">
									SEE LIVE
								</UrlButton>
								<UrlButton href="" target="_blank">
									SOURCE CODE
								</UrlButton>
								<UrlButton href="" target="_blank">
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Smart Brain */}
					<ImageEvent
						date="21/01/2020"
						className="text-center"
						text="Smart Brain Face Detect app"
						src={L_PYTHON}
						alt="Smart Brain Face Detect"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey="0"
											className="p-2 text-center accordian-main"
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse
											eventKey="0"
											className="text-left"
										>
											<Card.Body>
												<strong>Description:</strong> An
												app that detects face in a
												picture.
												<hr />
												<strong>Features:</strong>
												<ul className="list-styles pt-1">
													<li>Register new user</li>
													<li>Signin exiting user</li>
													<li>
														Keep tracks of entries
														for each user
													</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className="p-2">
															<Image
																src={L_REACT}
																alt="React"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															React
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_NODE_JS}
																alt="Node.js"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															Node.js
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_EXPRESS}
																alt="Express"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															Express
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_POSTGRESQL
																}
																alt="PostgreSQL"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															PostgreSQL
														</span>
													</li>
												</ul>
												<hr />
												<em>
													<strong>
														SignUp/ Signin:
													</strong>
													<br />
													<br />
													You can{" "}
													<strong>register</strong> as
													new user or{" "}
													<strong>log in</strong>{" "}
													using the demo account
													below.
													<br />
													<br />
													<strong>
														Demo Account Details:
													</strong>
													<br />
													email: demo@demo.com
													<br />
													password: demo
												</em>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className="d-flex justify-content-between flex-nowrap text-center">
								<UrlButton href="" target="_blank">
									SEE LIVE
								</UrlButton>
								<UrlButton href="" target="_blank">
									SOURCE CODE
								</UrlButton>
								<UrlButton href="" target="_blank">
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: RoboFriends */}

					<ImageEvent
						date="14/01/2020"
						className="text-center"
						text="RoboFriends"
						src={L_PYTHON}
						alt="Robo Friends"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey="0"
											className="p-2 text-center accordian-main"
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse
											eventKey="0"
											className="text-left"
										>
											<Card.Body>
												<strong>Description:</strong> An
												app that allows to search
												through robots fetched in
												real-time with users.
												<hr />
												<strong>Features:</strong>
												<ul className="list-styles pt-1">
													<li>
														Search through Robots
													</li>
													<li>
														Users and Robots being
														fetched via API call
													</li>
													<li>
														Usage of Redux store
													</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className="p-2">
															<Image
																src={L_HTML5}
																alt="HTML 5"
																rounded
																className="image-style m-1"
															></Image>{" "}
															HTML5
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_CSS3}
																alt="CSS 3"
																rounded
																className="image-style m-1"
															></Image>{" "}
															CSS3
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_BOOTSTRAP4
																}
																alt="Bootstrap 4"
																rounded
																className="image-style m-1"
															></Image>{" "}
															Bootstrap 4
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_REACT}
																alt="React"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															React
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_REDUX}
																alt="Redux"
																rounded
																className="image-style m-1"
															></Image>{" "}
															Redux
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className="d-flex justify-content-between flex-nowrap text-center">
								<UrlButton href="" target="_blank">
									SEE LIVE
								</UrlButton>
								<UrlButton href="" target="_blank">
									SOURCE CODE
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Product_Hunt_Clone */}

					<ImageEvent
						date="15/12/2019"
						className="text-center"
						text="Product Hunt Clone"
						src={L_PYTHON}
						alt="Product Hunt Clone"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey="0"
											className="p-2 text-center accordian-main"
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse
											eventKey="0"
											className="text-left"
										>
											<Card.Body>
												<strong>Description:</strong>{" "}
												This website is a clone of
												Product Hunt built using Django.
												<hr />
												<strong>Features:</strong>
												<ul className="list-styles pt-1">
													<li>
														Register as new user
													</li>
													<li>
														Signin as existing user
													</li>
													<li>
														Raise a Product for
														people to see and Vote
													</li>
													<li>Delete a product</li>
													<li>
														Like and Dislike a
														product
													</li>
													<li>
														Fully funtional
														Administration panel
													</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className="p-2">
															<Image
																src={L_HTML5}
																alt="HTML 5"
																rounded
																className="image-style m-1"
															></Image>{" "}
															HTML5
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_CSS3}
																alt="CSS 3"
																rounded
																className="image-style m-1"
															></Image>{" "}
															CSS3
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_BOOTSTRAP4
																}
																alt="Bootstrap 4"
																rounded
																className="image-style m-1"
															></Image>{" "}
															Bootstrap 4
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_DJANGO}
																alt="Django"
																rounded
																className="image-style m-1"
															></Image>{" "}
															Django
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_POSTGRESQL
																}
																alt="PostgreSQL"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															PostgreSQL
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className="d-flex justify-content-between flex-nowrap text-center">
								<UrlButton href="" target="_blank">
									SOURCE CODE
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Portfolio using Django */}
					<ImageEvent
						date="07/12/2019"
						className="text-center"
						text="Portfolio using Django"
						src={L_PYTHON}
						alt="Portfolio using Django"
					>
						<div className="d-flex justify-content-between flex-column mt-1">
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey="0"
											className="p-2 text-center accordian-main"
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse
											eventKey="0"
											className="text-left"
										>
											<Card.Body>
												<strong>Description:</strong>{" "}
												This is my first portfolio
												website built using Django.
												<hr />
												<strong>Features:</strong>
												<ul className="list-styles pt-1">
													<li>Send emails</li>
													<li>View my projects</li>
													<li>Write a blog</li>
													<li>
														Hosted using Digital
														ocean under
														www.akjfun.com
													</li>
													<li>
														Fully funtional
														Administration panel
													</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className="p-2">
															<Image
																src={L_HTML5}
																alt="HTML 5"
																rounded
																className="image-style m-1"
															></Image>{" "}
															HTML5
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_CSS3}
																alt="CSS 3"
																rounded
																className="image-style m-1"
															></Image>{" "}
															CSS3
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_BOOTSTRAP4
																}
																alt="Bootstrap 4"
																rounded
																className="image-style m-1"
															></Image>{" "}
															Bootstrap 4
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={L_DJANGO}
																alt="Django"
																rounded
																className="image-style m-1"
															></Image>{" "}
															Django
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_POSTGRESQL
																}
																alt="PostgreSQL"
																rounded
																className="image-style1 m-1"
															></Image>{" "}
															PostgreSQL
														</span>
													</li>
													<li>
														<span className="p-2">
															<Image
																src={
																	L_DIGITAL_OCEAN
																}
																alt="Digital Ocean"
																rounded
																className="image-style m-1"
															></Image>{" "}
															Digital-Ocean
														</span>
													</li>
												</ul>
												<hr />
												<em>
													<strong>
														View Demo Video:
													</strong>
													<br />
													<br />
													If you are reading this,
													that means I have updated my
													Portfolio website to recent
													one.
													<br />
													You can still see a video of
													my old portfolio by clicking
													on the button below.
													<br />
													<br />
												</em>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className="d-flex justify-content-between flex-nowrap text-center">
								<UrlButton href="" target="_blank">
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>
				</Events>
			</Timeline>
		</div>
	);
};

export default TimeLine;
