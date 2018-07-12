import axios from 'axios';

export const FETCH_CAMERAS = 'fetch_cameras';
export const CAMERA_SELECTED = 'camera_selected';
export const REMOVE_CAMERA = 'remove_camera';

const ROOT_URL = 'http://localhost:8082/api';

export function fetchCameras() {
    const request = axios.get(`${ROOT_URL}/cameras`);

    return {
        type: FETCH_CAMERAS,
        payload: request
    }
}

export function addToCart(camera) {
    return {
        type: CAMERA_SELECTED,
        payload: camera
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_CAMERA,
        payload: id
    }
}